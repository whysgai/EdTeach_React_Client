import LessonService from "../services/LessonService";

export const CREATE_LESSON = "CREATE_LESSON"
export const READ_LESSONS_FOR_MODULE = "READ_LESSONS_FOR_MODULE"
export const READ_LESSON = "READ_LESSON"
export const UPDATE_LESSON = "UPDATE_LESSON"
export const DELETE_LESSON = "DELETE_LESSON"

export const createLesson = (dispatch, moduleId, newLesson) =>
    LessonService.createLessonForModule(moduleId, newLesson)
        .then(actualLesson => dispatch({type: CREATE_LESSON, lesson: actualLesson}))

export const editLesson = (dispatch, lesson) =>
    LessonService.updateLesson(lesson._id, {...lesson, editing: true})
        .then(status => dispatch({
            type: UPDATE_LESSON,
            lesson: {...lesson, editing: true}
        }))

export const saveLesson = (dispatch, lesson) =>
    LessonService.updateLesson(lesson._id, {...lesson, editing: false})
        .then(status => dispatch({
            type: UPDATE_LESSON,
            lesson: {...lesson, editing: false}
        }))

export const updateLesson = (dispatch, lesson) =>
    dispatch({type: UPDATE_LESSON, lesson})

export const deleteLesson = (dispatch, lesson) =>
    LessonService.deleteLesson(lesson._id)
        .then(status => dispatch({type: DELETE_LESSON, lesson}))