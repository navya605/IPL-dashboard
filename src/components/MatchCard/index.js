// Write your code here
import './index.css'

const MatchCard = props => {
  const {recentMatches} = props
  const {competingTeam, competingTeamLogo, result, matchStatus} = recentMatches
  const statusColor =
    matchStatus === 'Lost' ? 'match-card-lost' : 'match-card-win'

  return (
    <li className="match-card-container">
      <img
        src={competingTeamLogo}
        alt={`competing team ${competingTeam}`}
        className="match-card-logo"
      />
      <p className="match-card-heading">{competingTeam}</p>
      <p>{result}</p>
      <p className={statusColor}>{matchStatus}</p>
    </li>
  )
}

export default MatchCard
