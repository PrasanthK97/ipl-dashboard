// Write your code here
import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {teamItem} = props
  const {id, name, teamImageUrl} = teamItem
  console.log(teamImageUrl)

  return (
    <div className="tc-cont">
      <Link to={`/team-matches/${id}`}>
        <div className="card-img-cont">
          <img alt={name} className="card-img" src={teamImageUrl} />
        </div>
        <div className="card-name-cont">
          <p>{name}</p>
        </div>
      </Link>
    </div>
  )
}

export default TeamCard
