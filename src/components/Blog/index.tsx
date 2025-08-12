import './style.css'
import type { BlogType } from '../../types/blog'

const Blog = (props: BlogType) => {
  return (
<div className="blog-container">
    <h2 className="blog-title">{props.title}</h2>
    <p className="blog-date">{props.date}</p>
    <div className="blog-excerp">{props.excerp}</div>
    <div className="blog-tags">
        <a href={props.link.url} className="blog-link">
            {props.link.label}
        </a>
    </div>
</div>
  )
}

export default Blog
