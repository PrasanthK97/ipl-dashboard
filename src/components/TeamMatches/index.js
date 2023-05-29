// Write your code here
import {Component} from 'react'

import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import MatchCard from '../MatchCard'

import LatestMatch from '../LatestMatch'

import './index.css'

class TeamMatches extends Component {
  state = {
    teamMatchList: [],
    banner: '',
    recent: [],
    latest: [],
    isLoading: true,
  }

  teamButtonClick = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const teamApiRequest = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const teamApiData = await teamApiRequest.json()
    const teamBanner = teamApiData.team_banner_url

    const latestMatchDetails = teamApiData.latest_match_details
    const teamReqData = {
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

    const recentMatch = teamApiData.recent_matches
    console.log('teamApiData')
    const reqRecentData = recentMatch.map(recentMatches => ({
      competingTeam: recentMatches.competing_team,
      competingTeamLogo: recentMatches.competing_team_logo,
      date: recentMatches.date,
      firstInnings: recentMatches.first_innings,
      id: recentMatches.id,
      manOfTheMatch: recentMatches.man_of_the_match,
      matchStatus: recentMatches.match_status,
      result: recentMatches.result,
      secondInnings: recentMatches.second_innings,
      umpires: recentMatches.umpires,
      venue: recentMatches.venue,
    }))

    const latestMatchData = teamApiData.latest_match_details
    const latestMatchDetail = {
      competingTeam: latestMatchData.competing_team,
      competingTeamLogo: latestMatchData.competing_team_logo,
      date: latestMatchData.date,
      firstInnings: latestMatchData.first_innings,
      id: latestMatchData.id,
      manOfTheMatch: latestMatchData.man_of_the_match,
      matchStatus: latestMatchData.match_status,
      result: latestMatchData.result,
      secondInnings: latestMatchData.second_innings,
      umpires: latestMatchData.umpires,
      venue: latestMatchData.venue,
    }

    this.setState({
      teamMatchList: teamReqData,
      banner: teamBanner,
      recent: reqRecentData,
      latest: latestMatchDetail,
      isLoading: false,
    })
  }

  render() {
    this.teamButtonClick()
    const {banner, recent, latest, isLoading} = this.state
    console.log('njk', latest)
    return (
      <div>
        {isLoading ? (
          <div testid="loader" className="loader-container">
            <Loader
              type="BallTriangle"
              color="#00BFFF"
              height={80}
              width={80}
            />
          </div>
        ) : (
          <>
            <div>
              <img src={banner} alt={banner} />
            </div>
            <div>
              <LatestMatch latest={latest} />
            </div>
            <ul>
              {recent.map(each => (
                <li key={each.id}>
                  <MatchCard recentItem={each} />
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    )
  }
}
export default TeamMatches
