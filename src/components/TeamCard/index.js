// Write your code here
import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {cardDetails} = props
  const {name, teamImageUrl, id} = cardDetails

  return (
    <Link to={`/team-matches/${id}`} className="team-card-decoration">
      <li className="team-card-bg-container">
        <img src={teamImageUrl} alt={name} className="team-card-logo" />
        <p className="team-card-heading">{name}</p>
      </li>
    </Link>
  )
}

export default TeamCard
