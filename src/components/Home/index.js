// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import TeamCard from '../TeamCard'
import './index.css'

class Home extends Component {
  state = {teamsList: [], isLoading: true}

  componentDidMount() {
    this.getTeamsList()
  }

  getTeamsList = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const {teams} = data

    const updatedData = teams.map(eachItem => ({
      id: eachItem.id,
      name: eachItem.name,
      teamImageUrl: eachItem.team_image_url,
    }))

    console.log(updatedData)

    this.setState({teamsList: updatedData, isLoading: false})
  }

  render() {
    const {teamsList, isLoading} = this.state
    return (
      <div className="home-bg-container">
        {isLoading ? (
          // eslint-disable-next-line react/no-unknown-property
          <div testid="loader" className="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <div>
            <div className="home-heading-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
                alt="ipl logo"
                className="home-logo"
              />
              <h1 className="home-heading">IPL Dashboard</h1>
            </div>
            <ul className="home-cards-container">
              {teamsList.map(eachItem => (
                <TeamCard key={eachItem.id} cardDetails={eachItem} />
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}

export default Home
