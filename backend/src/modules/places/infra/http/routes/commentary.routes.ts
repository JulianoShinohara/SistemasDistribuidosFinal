import {Router} from 'express';
import CommentaryControllers from '../controllers/commentaryControllers';

const commentaryControllers = new CommentaryControllers();
const commentaryRoutes = Router();

commentaryRoutes.get('/one/:id', commentaryControllers.index);
commentaryRoutes.get('/all', commentaryControllers.all );
commentaryRoutes.post('/:places_id', commentaryControllers.create );
commentaryRoutes.delete('/one/:id', commentaryControllers.delete)

export default commentaryRoutes;