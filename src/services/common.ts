

export function getDefaultReqOption(): RequestInit {
    let token = localStorage.getItem("jwtToken")
    const reqOption = { headers : {'Content-Type': 'application/json;charset=UTF-8', Authorization : `Bearer ${token}` }}
    return reqOption
}