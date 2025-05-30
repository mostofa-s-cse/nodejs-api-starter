import express from 'express';
import authRoutes from './auth';
import roleRoutes from './roles';
import permissionRoutes from './permissions';
import emailRoutes from './email';
import userRoutes from './users';
const router = express.Router();

router.use('/auth', authRoutes);
router.use('/users', userRoutes);
router.use('/roles', roleRoutes);
router.use('/permissions', permissionRoutes);
router.use('/queue-jobs', emailRoutes);

export default router; 