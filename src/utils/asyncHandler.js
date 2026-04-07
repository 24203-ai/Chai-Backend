const asyncHandler = (requestHandler) => async (req, res, next) => {
    try {
        await requestHandler(req, res, next);   
    } catch (error) {
        res.status(error.status || 500).json({
            success: false,
            message: error.message || "Server Error",
        });
    }
}   

export { asyncHandler };

//const asyncHnadler = () => {}
//const asyncHnadler = (fn) => ()=>{}
//const asyncHnadler = (fn) => async()=>{}

