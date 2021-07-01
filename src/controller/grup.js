import Group from "@proyek3/postgres-database/models/Grup"

export const addUserToGroup  = async (req, res, next) => {
    try{
        const userList = req.body.userIdList || []
        const groupName = req.body.groupName

        const group = await Group.findByPk(groupName)
        if(!group){
            const error = new Error('Invalid groupname')
            error.statusCode = 500
            error.cause = 'Group dengan nama tersebut tidak ada'
            throw error
        }
        group.add
        res.json({
            message: "Sucess"
        })
    }catch (e) {
        next(e)
    }
}
