import React from "react";
import CourseEditorWidgetComponent from "./CourseEditorWidgetComponent";

const CourseEditorWidgetPaneComponent = ({widgets}) =>
    <div>
        <button className="col-sm-12 btn btn-primary">Add Widget</button>
        {
            widgets.map((widget, index) =>
                <CourseEditorWidgetComponent
                    widget={{widget}}
                />
            )
        }
        <div className="pull-right">
            <button className="btn btn-success">Save</button>
            <button className="btn btn-outline-info">Preview</button>
        </div>
    </div>


export default CourseEditorWidgetPaneComponent;