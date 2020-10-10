import React from "react";
import {connect} from "react-redux";
import CourseModuleListComponent from "../components/course_editor/CourseModuleListComponent";
import {createModule, deleteModule, updateModule} from "../actions/courseModuleActions";

const stateToPropertyMapper = (state) => ({
  modules: state.moduleReducer.modules

})

const propertyToDispatchMapper = (dispatch) => ({
  deleteModule: (module) => deleteModule(dispatch, module),
  createModule: () => createModule(dispatch),
  updateModule: (module) => {updateModule(dispatch, module)}
})

export default connect(
    stateToPropertyMapper,
    propertyToDispatchMapper)
(CourseModuleListComponent)