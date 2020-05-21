export default function Card({ title, picture }) {
  return (
    <div className="card">
      <div className="title">{title}</div>
      <div className="picture">
        <img src={picture} alt={title} />
      </div>
      <style jsx>{`
        .card {
          margin: 5px;
          width: 200px;
          height: 100px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          border: 1px solid #d6d6d6;
          border-radius: 5px;
          transition: box-shadow 0.5s;
        }
        .card:hover {
          box-shadow: 0 5px 15px -5px #d6d6d6;
        }
        .title {
          padding: 5px;
          font-weight: 800;
          box-sizing: border-box;
        }
        .picture {
          width: 100px;
          height: 100px;
          overflow: hidden;
          border-top-right-radius: 5px;
          border-bottom-right-radius: 5px;
          text-align: center;
        }
        img {
          width: 100px;
        }
      `}</style>
    </div>
  )
}
