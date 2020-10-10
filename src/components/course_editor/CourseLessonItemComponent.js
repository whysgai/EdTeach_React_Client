import React from "react";

const CourseLessonItemComponent = ({lesson, deleteLesson, updateLesson, editLesson, saveLesson}) =>
    <li className="nav-item nav-link">
        {
            !lesson.editing &&
            <span>
                <span className="text-primary">{lesson.lessonname}</span>
                <a href="#" className="float-right text-primary wbdv-lesson-item-edit-btn ml-2"
                   onClick={() => editLesson(lesson)}>
                    <i className="fa fa-pencil" aria-hidden="true"/>
                </a>
            </span>
        }
        {
            lesson.editing &&
                <div className="input-group">
                    <input
                        className="form-control"
                        type="text"
                        value={lesson.lessonname}
                        onChange={(event) => updateLesson({
                            ...lesson,
                            lessonname: event.target.value
                        })}
                    />
                    <div className="input-group-append">
                        <button className="btn btn-outline-secondary wbdv-lesson-item-delete-btn"
                                type="button"
                           onClick={() => deleteLesson(lesson)}>
                            <i className="text-primary fa fa-times-circle" aria-hidden="true"/>
                        </button>
                        <button className="btn btn-outline-secondary wbdv-lesson-item-save-btn"
                                type="button"
                           onClick={() => saveLesson(lesson)}>
                            <i className="text-primary fa fa-check" aria-hidden="true"/>
                        </button>
                    </div>
                </div>
        }
    </li>

export default CourseLessonItemComponent