"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[8592],{2489:(d,i,o)=>{o.d(i,{q:()=>n});var h=o(2340),r=o(6738),c=o(529);let n=(()=>{class s{constructor(t){this.http=t,this.ROOT_URL=`${h.N.apiUrl}/cbtCourses`}createCourse(t){return this.http.post(`${this.ROOT_URL}/create-course`,t)}getCourses(){return this.http.get(`${this.ROOT_URL}/get-courses`)}getCourse(t){return this.http.get(`${this.ROOT_URL}/get-course/${t}`)}deleteCourse(t){return this.http.get(`${this.ROOT_URL}/delete-course/${t}`)}createTopic(t){return this.http.post(`${this.ROOT_URL}/create-topic`,t)}}return s.\u0275fac=function(t){return new(t||s)(r.LFG(c.eN))},s.\u0275prov=r.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"}),s})()},8883:(d,i,o)=>{o.d(i,{C:()=>n});var h=o(2340),r=o(6738),c=o(529);let n=(()=>{class s{constructor(t){this.http=t,this.ROOT_URL=`${h.N.apiUrl}/moduleCourses`}createCourse(t){return this.http.post(`${this.ROOT_URL}/create-module`,t)}getCourses(){return this.http.get(`${this.ROOT_URL}/get-modules`)}getCurrentCourses(t){return this.http.get(`${this.ROOT_URL}/get-course/${t}`)}deleteCourse(t){return this.http.put(`${this.ROOT_URL}/delete-module/${t}`,{})}getSubject(t){return this.http.get(`${this.ROOT_URL}/get-subject/${t}`)}createTopic(t){return this.http.post(`${this.ROOT_URL}/create-module-topic`,t)}getTopic(t,e){return this.http.get(`${this.ROOT_URL}/get-module-topic/${t}/${e}`)}deleteTopic(t){return this.http.delete(`${this.ROOT_URL}/delete-module-topic/${t}`)}addTopicLecture(t){const e=new FormData;return e.append("moduleId",t.moduleId),e.append("subjectId",t.subjectId),e.append("topicId",t.topicId),e.append("questionId",t.questionId),e.append("video",t.video),e.append("moduleNote",t.moduleNote),this.http.put(`${this.ROOT_URL}/add-module-topic-question-solution`,e)}getTopicLecture(t,e,a){return this.http.get(`${this.ROOT_URL}/get-module-topic-question-solution/${t}/${e}/${a}`)}changeTopicLecture(t,e,a){return this.http.put(`${this.ROOT_URL}/change-topic-lecture/${t}/${e}/${a}`,"")}deleteTopicLecture(t,e){return this.http.delete(`${this.ROOT_URL}/delete-module-topic-question-solution/${t}/${e}`)}}return s.\u0275fac=function(t){return new(t||s)(r.LFG(c.eN))},s.\u0275prov=r.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"}),s})()},2192:(d,i,o)=>{o.d(i,{E:()=>n});var h=o(529),r=o(2340),c=o(6738);let n=(()=>{class s{constructor(t){this.http=t,this.headers=(new h.WM).set("content-type","application/json").set("Authorization",`Bearer ${localStorage.getItem("token")}`),this.ROOT_URL=`${r.N.apiUrl}/schools`}viewProfile(){let t=JSON.parse(localStorage.getItem("schoolId"));return this.http.get(`${this.ROOT_URL}/profile/${t}`,{headers:this.headers})}addStudent(t){let e=JSON.parse(localStorage.getItem("schoolId"));return this.http.post(`${this.ROOT_URL}/add-student/${e}`,t,{headers:this.headers})}getSchoolStudent(){let t=JSON.parse(localStorage.getItem("schoolId"));return this.http.get(`${this.ROOT_URL}/get-school-student/${t}`,{headers:this.headers})}filterStudent(t){let e=JSON.parse(localStorage.getItem("schoolId"));return this.http.put(`${this.ROOT_URL}/filter-student/${e}`,t,{headers:this.headers})}getNotice(){return this.http.get(`${this.ROOT_URL}/get-notice`,{headers:this.headers})}getReport(){let t=JSON.parse(localStorage.getItem("schoolId"));return this.http.get(`${this.ROOT_URL}/get-report/${t}`,{headers:this.headers})}assignLmsCourse(t){let e=JSON.parse(localStorage.getItem("schoolId"));return this.http.post(`${this.ROOT_URL}/assign-lmscourse/${e}`,t,{headers:this.headers})}getLmsCourse(t){let e=JSON.parse(localStorage.getItem("schoolId"));return this.http.get(`${this.ROOT_URL}/get-lmscourse/${e}/${t}`,{headers:this.headers})}getLmsCourseTopic(t,e){let a=JSON.parse(localStorage.getItem("schoolId"));return this.http.get(`${this.ROOT_URL}/get-lmscourse/${a}/${t}/${e}`,{headers:this.headers})}absentStudent(t){let e=JSON.parse(localStorage.getItem("schoolId"));return this.http.put(`${this.ROOT_URL}/absent/${e}`,t,{headers:this.headers})}presentStudent(t){let e=JSON.parse(localStorage.getItem("schoolId"));return this.http.put(`${this.ROOT_URL}/present/${e}`,t,{headers:this.headers})}}return s.\u0275fac=function(t){return new(t||s)(c.LFG(h.eN))},s.\u0275prov=c.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"}),s})()}}]);