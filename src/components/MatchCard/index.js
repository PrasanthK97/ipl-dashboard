// Write your code here

import './index.css'

const MatchCard = props => {
  const {recentItem} = props
  const {
    competingTeam,
    competingTeamLogo,
    date,
    firstInnings,
    id,
    manOfTheMatch,
    matchStatus,
    result,
    secondInnings,
    umpires,
    venue,
  } = recentItem
  return (
    <div className="match-card-cont">
      <img
        className="match-card-image"
        src={competingTeamLogo}
        alt={`latest match${competingTeam}`}
      />
      <p>{competingTeam}</p>
      <p>{result}</p>
      <p>{matchStatus}</p>
    </div>
  )
}

export default MatchCard
