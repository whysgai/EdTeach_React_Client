import React from "react";
import CourseTableComponent from "./CourseTableComponent";
import {findAllCourses, createCourse, deleteCourse, updateCourse,} from "../services/CourseService"
import CourseRowComponent from "./CourseRowComponent";

class CourseManagerComponent extends React.Component {

    // state = {}

    constructor() {
        super();
        this.state = {
            courses: [],
            showTable: true,
        };
    }
    // state = {
    //     courses: [],
    //     showTable: true,
    // }

    componentDidMount() {
        findAllCourses()
            .then(courses => {
                this.setState({
                    courses: courses
                })
            })
    }

    addCourse = () => {
        const newCourse = {
            title: "New Course",
            owner: this.props.instructor,
            modified: (new Date()).toDateString()
        }
        createCourse(newCourse)
            .then(serverCourse => this.setState(prevState => ({
                courses : [
                    ...prevState.courses, serverCourse
                ]
                })
            ))
    }

    render() {
        return(<div className="CourseManager">
            <form>
                <div className="form-group row bg-light">
                    <label htmlFor="newcourse" className="col-sm-6">
                        <h1 className="title center-text bg-light wbdv-label wbdv-course-manager">{this.props.instructor}'s Course List - {this.props.term}</h1>
                    </label>
                    <div className="col-sm-5 title-align">
                        <input className="form-control btn-align-veritcal wbdv-field wbdv-new-course" id="newcourse" placeholder="Add a course"></input>
                    </div>
                    <div className="col-sm-1 title-align">
                        <button className="btn btn-primary btn-block wbdv-button wbdv-add-course" onClick={this.addCourse}>
                            <i className="fa fa-plus-circle" aria-hidden="true"></i>
                        </button>
                    </div>
                    <div className="btn-group btn-group-toggle" data-toggle="buttons">
                        <label className="btn btn-secondary active">
                            <input type="radio" name="options" id="option1" autoComplete="off" checked/> Table
                        </label>
                        <label className="btn btn-secondary">
                            <input type="radio" name="options" id="option2" autoComplete="off"/> Cards
                        </label>
                    </div>
                </div>
            </form>

            {
                this.state.showTable &&
                    <CourseTableComponent courses={this.state.courses}/>
            }

        </div>
        );
    }

}

export default CourseManagerComponent;