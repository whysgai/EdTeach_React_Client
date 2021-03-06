import React from "react";

const CourseEditorParagraphWidgetComponent = ({widget, updateLocalWidget, preview}) =>

    <div className="">
        {
            !preview &&
                <div>
                    <div className="form-group">
                        <label htmlFor="widgetindex-title" className="d-none">Widget Title</label>
                        <input className="form-control wbdv-field" id="widget-name"
                               placeholder="Widget title"
                               value={widget.title}
                               onChange={(event) => updateLocalWidget({
                                   ...widget,
                                   title: event.target.value
                               })}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="paragraph-text" className="d-none">Paragraph Text</label>
                        <textarea className="form-control wbdv-field" id="paragraph-text"
                               placeholder="Text"
                               value={!widget.text ? "Text" : widget.text}
                               onChange={(event) => updateLocalWidget({
                                  ...widget,
                                  text: event.target.value
                               })}
                        />
                    </div>
                    <div className="form-group">
                        <h4>Preview</h4>
                    </div>
                </div>
        }
        <div className="form-group">
            <p><pre className="text-wrap">{!widget.text ? "Text..." : widget.text}</pre></p>
        </div>
    </div>


export default CourseEditorParagraphWidgetComponent
