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
     ReadAdmin(data){
        return new Promise(
           async (resolve, reject)=>{
                try {
                    const Admins = await AdminModel.find()

                    if(Admins){
                        resolve(
                            {
                                msg : "admin found succesfully",
                                status : 1 ,
                                admin : Admins
                            }
                        )
                    }else{
                        reject(
                            {
                                msg : "admin not found",
                                status : 0
                            }
                        )
                    }
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