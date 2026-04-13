import { useState } from 'react'

export default function TagInput() {
  const [tags, setTags] = useState<string[]>([])
  const [value, setValue] = useState('')
  const [error, setError] = useState('')

  const addTag = () => {
    const trimmed = value.trim()
    if (!trimmed) return
    if (tags.includes(trimmed)) {
      setError("Duplicate tags arre not alloweed!!!!")
      return
    }
    if (tags.length >= 10) return
    setTags([...tags, trimmed])
    setValue('')
    setError('')
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === ' ') {
      e.preventDefault()
      addTag()
    }
    if(e.key === 'Backspace' && !value) {
      removeTag(tags[tags.length - 1])
    }
  }

  const removeTag = (tag: string) => {
    setTags(tags.filter(t => t !== tag))
    setError('')
  }

  return (
    <div className="tagWrapper">
      <div className="tagBox">
        {tags.map(tag => (
          <span key={tag} className="tag">
            {tag}
            <button onClick={() => removeTag(tag)}>×</button>
          </span>
        ))}
        <input
          value={value}
          disabled={tags.length >= 10}
          onChange={e => setValue(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={tags.length >= 10 ? "Maximum 10 tags adre allowed & make sure too not usre more than that number of characters" : "Type and press space to add tags"}
        />
      </div>
      
      {error && <p className="error">{error + " has been occured "}</p>}
    </div>
  )
}
