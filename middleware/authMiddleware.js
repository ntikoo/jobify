import {
  BadRequestError,
  UnAuthenticatedError,
  UnAuthorizedError,
} from '../errors/customErrors.js';
import { verifyJwt } from '../utils/tokenUtils.js';

export const authenticateUser = (req, res, next) => {
  const { token } = req.cookies;
  if (!token) throw new UnAuthenticatedError('authentication invalid');
  try {
    const { userId, role } = verifyJwt(token);
    const testUser = userId === '659fd4619fcf7414ff3d9c10';
    req.user = { userId: userId, role, testUser };
    next();
  } catch (error) {
    throw new UnAuthenticatedError('authentication invalid');
  }
};

export const authorizePermissions = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      throw new UnAuthorizedError('access denied');
    }
    next();
  };
};

export const checkForTestUser = (req, res, next) => { 
  if (req.user.testUser) {
    throw new BadRequestError('Demo user has read only access');
  }
  next();
};
