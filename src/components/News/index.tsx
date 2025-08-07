import './style.css'
import type { NewsType } from '../../types/news'

const News = (props: NewsType) => {
  return (
    <div className="news">
      <p className="news-title">
        {props.isImportant ? <strong>{props.title}</strong> : props.title}
      </p>

      <a href={props.link} className="small-desc">
        Переглянути
      </a>

      <p className="news-time">{props.time}</p>
    </div>
  )
}

export default News
