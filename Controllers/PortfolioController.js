const PortfolioModel = require("../Modules/PortfolioMode")

class PortfolioController {
    add(data, files) {
        return new Promise(
            (resolve, reject) => {
                try {
                    const NewImageName = files.name
                    const relativePath = './Public/ProjectImages/' + NewImageName
                    files.mv(
                        relativePath,
                        (error) => {
                            if (error) {
                                resolve(
                                    {
                                        msg: "Project not Add due to image",
                                        status: 0
                                    }
                                )
                            } else {
                                const project = new PortfolioModel(
                                    {
                                        ...data,
                                        ImageName: NewImageName
                                    }
                                )

                                project.save().then(
                                    (succes) => {
                                        resolve(
                                            {
                                                msg: "Project add succesfully",
                                                status: 1
                                            }
                                        )
                                    }
                                ).catch(
                                    (error) => {
                                        console.log(error)
                                        reject(
                                            {
                                                msg: "Project not created",
                                                status: 0
                                            }
                                        )

                                    }
                                )
                            }
                        }
                    )



                } catch (error) {
                    () => {
                        console.log(error)
                        reject(
                            {
                                msg: "Internal server error"
                            }
                        )
                    }
                }

            }
        )
    }
    read(id) {
        return new Promise(
            async (resolve, reject) => {
                try {

                    let project
                    if (id) {
                        project = await PortfolioModel.findById(id)
                    } else {
                        project = await PortfolioModel.find()
                    }

                    if (project) {
                        resolve(
                            {
                                msg: "projects found succesfully",
                                status: 1,
                                project
                            }
                        )
                    } else {
                        reject(
                            {
                                msg: "projects not found",
                                status: 0
                            }
                        )
                    }

                } catch (error) {
                    () => {
                        console.log(error)
                        reject(
                            {
                                msg: "Internal server error"
                            }
                        )
                    }
                }
            }
        )
    }
    delete(id) {
        return new Promise(
            async (resolve, reject) => {
                try {
                    PortfolioModel.deleteOne({ _id: id }).then(
                        (succes) => {
                            resolve(
                                {
                                    msg: "project deleted succesfully",
                                    status: 1
                                }
                            )
                        }
                    ).catch(
                        (error) => {
                            console.log(error)
                            reject(
                                {
                                    msg: "Project not deleted",
                                    status: 0
                                }
                            )
                        }
                    )

                } catch (error) {
                    () => {
                        console.log(error)
                        reject(
                            {
                                msg: "Internal server error"
                            }
                        )
                    }
                }
            }
        )
    }
}

module.exports = PortfolioController;