/* eslint-disable react/no-unknown-property */
// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import LatestMatch from '../LatestMatch'
import './index.css'

class TeamMatches extends Component {
  state = {
    matchId: '',
    latestMatchDetails: [],
    bannerUrl: '',
    recentMatches: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getTeamMatchesDetails()
  }

  getTeamMatchesDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    console.log(data)

    const teamBannerUrl = data.team_banner_url

    const latestMatchDetails = data.latest_match_details
    const updatedLatestMatchDetails = {
      competingTeam: latestMatchDetails.competing_team,
      competingTeamLogo: latestMatchDetails.competing_team_logo,
      date: latestMatchDetails.date,
      firstInnings: latestMatchDetails.first_innings,
      id: latestMatchDetails.id,
      manOfTheMatch: latestMatchDetails.man_of_the_match,
      matchStatus: latestMatchDetails.match_status,
      result: latestMatchDetails.result,
      secondInnings: latestMatchDetails.second_innings,
      umpires: latestMatchDetails.umpires,
      venue: latestMatchDetails.venue,
    }

    const recentMatches = data.recent_matches

    const recentMatchesUpdated = recentMatches.map(eachItem => ({
      competingTeam: eachItem.competing_team,
      competingTeamLogo: eachItem.competing_team_logo,
      firstInnings: eachItem.first_innings,
      result: eachItem.result,
      matchStatus: eachItem.match_status,
      id: eachItem.id,
    }))

    this.setState({
      matchId: id,
      bannerUrl: teamBannerUrl,
      latestMatchDetails: updatedLatestMatchDetails,
      recentMatches: recentMatchesUpdated,
      isLoading: false,
    })
  }

  render() {
    const {
      matchId,
      bannerUrl,
      latestMatchDetails,
      recentMatches,
      isLoading,
    } = this.state
    return (
      <div className={`team-matches-container team-matches-${matchId}`}>
        {isLoading ? (
          <div testid="loader" className="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <div>
            <img src={bannerUrl} alt="team banner" className="match-img" />
            <p className="team-desc">Latest Matches</p>
            <LatestMatch
              key={matchId}
              latestMatchDetails={latestMatchDetails}
              recentMatches={recentMatches}
            />
          </div>
        )}
      </div>
    )
  }
}

export default TeamMatches
