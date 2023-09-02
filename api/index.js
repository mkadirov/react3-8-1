import axios from 'axios'

const baseUrl = 'https://react3-8-1.vercel.app/api/'

const getTeams = async() => {
    try {
        const res = await axios.get(baseUrl + 'teams')
        return {success: true, data: res.data}
    } catch (error) {
        return { success: false, data: []}
    }
}


const getEmployees = async() => {
    try {
        const res = await axios.get(baseUrl + 'employees')
        return{success: true, data: res.data}
    } catch (error) {
        return {success: false, data: []}
    }
}


const getTeamEmployees = async(team) => {
    try {
        const res = await axios.get(baseUrl + 'teams/' + team)
        return {success: true, data: res.data}
    } catch (error) {
        return {success: false, data: []}
    }
}

const getTeamsData = async() => {
    try {
        const res = await axios.get(baseUrl + 'team_projects')
        return {success: true, data: res.data}
    } catch (error) {
        return {success: false, data: []}
    }
}


export {getTeams, getEmployees, getTeamEmployees, getTeamsData}