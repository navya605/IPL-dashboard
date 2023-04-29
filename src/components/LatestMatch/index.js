// Write your code here
import MatchCard from '../MatchCard'
import './index.css'

const LatestMatch = props => {
  const {latestMatchDetails, recentMatches} = props
  const {
    competingTeam,
    competingTeamLogo,
    date,
    firstInnings,
    manOfTheMatch,
    result,
    secondInnings,
    umpires,
    venue,
  } = latestMatchDetails
  console.log(recentMatches)
  return (
    <div>
      <div className="latest-match-top-container">
        <div>
          <p className="latest-match-top-heading1">{competingTeam}</p>
          <p className="latest-match-top-heading2">{date}</p>
          <p>{venue}</p>
          <p>{result}</p>
        </div>

        <img
          src={competingTeamLogo}
          alt={`latest match ${competingTeam}`}
          className="latest-match-logo"
        />
      </div>
      <div className="latest-match-bottom-container">
        <h1 className="latest-match-bottom-heading">First Innings</h1>
        <p className="latest-match-bottom-desc">{firstInnings}</p>
        <h1 className="latest-match-bottom-heading">Second Innings</h1>
        <p className="latest-match-bottom-desc">{secondInnings}</p>
        <h1 className="latest-match-bottom-heading">Man Of The Match</h1>
        <p className="latest-match-bottom-desc">{manOfTheMatch}</p>
        <h1 className="latest-match-bottom-heading">Umpires</h1>
        <p className="latest-match-bottom-desc">{umpires}</p>
      </div>
      <ul className="latest-match-sub-cards">
        {recentMatches.map(eachItem => (
          <MatchCard key={eachItem.id} recentMatches={eachItem} />
        ))}
      </ul>
    </div>
  )
}

export default LatestMatch
