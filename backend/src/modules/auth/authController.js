import * as AuthService from "./authService.js";

export const register = async (req, res, next) => {
    try {
        res.json(await AuthService.register(req.body));
    } catch (e) {
        next(e);
    }
};

export const verifyOtp = async (req, res, next) => {
    try {
        res.json(await AuthService.verifyOtp(req.body));
    } catch (e) {
        next(e);
    }
};

export const login = async (req, res, next) => {
    try {
        const tokens = await AuthService.login(req.body);
        res
            .cookie("refreshToken", tokens.refreshToken, {
                httpOnly: true,
                secure: process.env.NODE_ENV === 'production',
            })
            .json({ 
                accessToken: tokens.accessToken,
                refreshToken: tokens.refreshToken 
            });
    } catch (e) {
        next(e);
    }
};

export const forgotPassword = async (req, res, next) => {
    try {
        res.json(await AuthService.forgotPassword(req.body));
    } catch (e) {
        next(e);
    }
};

export const verifyResetOtp = async (req, res, next) => {
    try {
        res.json(await AuthService.verifyResetOtp(req.body));
    } catch (e) {
        next(e);
    }
};

export const resetPassword = async (req, res, next) => {
    try {
        res.json(await AuthService.resetPassword(req.body));
    } catch (e) {
        next(e);
    }
};
