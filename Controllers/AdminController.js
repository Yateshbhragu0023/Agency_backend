const AdminModel = require("../Modules/AdminModel")

class AdminController{
    CreateAdmin(data){
        return new Promise(
            (resolve, reject)=>{
                try {
                    const admin = new AdminModel(
                        {
                            ...data
                        }
                    )

                    admin.save().then(
                        (succes)=>{
                            resolve(
                                {
                                    msg : "admin create succesfully",
                                    status : 1
                                }
                            )
                        }
                    ).catch(
                        ()=>{
                            resolve(
                                {
                                    msg : "admin not create",
                                    status : 0
                                }
                            )
                        }
                    )
                } catch (error) {
                    ()=>{
                        console.log(error)
                        reject(
                            {
                                msg : "internal server error",
                                status : 0
                            }
                        )
                    }
                }
            }
        )
    }
}

module.exports = AdminController ;