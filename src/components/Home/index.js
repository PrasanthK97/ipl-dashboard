// Write your code here

import Loader from 'react-loader-spinner'

import {Link} from 'react-router-dom'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import {Component} from 'react'

import './index.css'

import TeamCard from '../TeamCard'

class Home extends Component {
  state = {mainList: [], latestMatchList: [], isLoading: true}

  componentDidMount = () => {
    this.getApiMethod()
  }

  getApiMethod = async () => {
    const apiRequest = await fetch('https://apis.ccbp.in/ipl')
    const apiData = await apiRequest.json()
    const reqData = apiData.teams.map(each => ({
      id: each.id,
      name: each.name,
      teamImageUrl: each.team_image_url,
    }))

    this.setState({mainList: reqData, isLoading: false})
  }

  render() {
    const {mainList, isLoading} = this.state
    return (
      <div>
        {isLoading ? (
          <div testid="loader">
            <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
          </div>
        ) : (
          <div className="bg">
            <Link to="/team-matches">
              <img
                src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
                alt="ipl logo"
              />
            </Link>
            <h1>IPL Dashboard</h1>
            <ul>
              {mainList.map(each => (
                <li className="main-li" key={each.id}>
                  <TeamCard teamItem={each} />
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}

export default Home
