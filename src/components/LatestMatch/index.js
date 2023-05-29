// Write your code here
import './index.css'

const LatestMatch = props => {
  const {latest} = props
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
  } = latest
  console.log('dkgkl', latest)
  return (
    <div className="latest-cont">
      <div className="ar">
        <p>{competingTeam}</p>
        <p>{date}</p>
        <p>{venue}</p>
        <p>{matchStatus}</p>
        <p>{result}</p>
      </div>
      <div className="ar">
        <img alt="name" className="lm-img" src={competingTeamLogo} />
      </div>
      <div className="ar">
        <p>First Innings</p>
        <p>{firstInnings}</p>
        <p>Second Innings</p>
        <p>{secondInnings}</p>
        <p>Man of the match</p>
        <p>{manOfTheMatch}</p>
        <p>umpires</p>
        <p>{umpires}</p>
      </div>
    </div>
  )
}

export default LatestMatch
