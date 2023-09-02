import axios from 'axios'

const baseUrl = 'http://localhost:3000/api/'

const getTeams = async() => {
    try {
        const res = await axios.get(baseUrl + 'teams')
        return {success: true, data: res.data}
    } catch (error) {
        return { success: false}
    }
}


const getEmployees = async() => {
    try {
        const res = await axios.get(baseUrl + 'employees')
        return{success: true, data: res.data}
    } catch (error) {
        return {success: false}
    }
}


const getTeamEmployees = async(team) => {
    try {
        const res = await axios.get(baseUrl + 'teams/' + team)
        return {success: true, data: res.data}
    } catch (error) {
        return {success: false}
    }
}

const getTeamsData = async() => {
    try {
        const res = await axios.get(baseUrl + 'team_projects')
        return {success: true, data: res.data}
    } catch (error) {
        return {success: false}
    }
}


export {getTeams, getEmployees, getTeamEmployees, getTeamsData}