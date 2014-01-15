/**
 * Created by solomon on 14-1-9.
 */

    var UserRelated = {

        identifyId: function(id,callback){
            mixpanel.identify(id);
        },

        // SP means super properties, which is an usage of Mixpanel.
        registerSP: function(id,user_name,name){
            mixpanel.register({
                UserId:id,
                UserName:user_name,
                Name:name
            });
        },

        login: function(callback){
            mixpanel.track("Login");
        },

        logout: function(){
            mixpanel.track("Logout");
        },

        setActive: function(){
            mixpanel.people.set_once("FirstActive", new Date());
            mixpanel.people.set("LastActive", new Date());
        }
    }

    var LearningRelated = {    // Property Names must be the same when come with parent-child relationship!!

        enterChapter: function(id,title){
            mixpanel.track("EnterChapter",{ChapterId:id, ChapterTitle:title});
        },

        enterLesson: function(lesson_id,lesson_title,parent_chapter_id,parent_chapter_title){
            mixpanel.track("EnterLesson",{LessonId:lesson_id, LessonTitle:lesson_title/*, ChapterId:parent_chapter_id, ChapterTitle:parent_chapter_title*/});
        },

        enterVideo: function(id,title,length,parent_lesson_id,parent_lesson_title,parent_chapter_id,parent_chapter_title){
            mixpanel.track("EnterVideo",{VideoId:id, VideoTitle:title,VideoLength:length});
        },

        finishVideo: function(id,title,length,ratio){
            mixpanel.track("FinishVideo",{VideoId:id, VideoTitle:title,VideoPlayedLength:length, VideoPlayedRatio:ratio});
        },

        enterQuiz: function(id,title){
            mixpanel.track("EnterQuiz",{QuizId:id, QuizTitle:title});
        },

        finishProblem: function(id,body,type,correct_answer,user_answer,correct_or_not,hint_or_not/*,time_spent*/){
            mixpanel.track("FinishProblem",{
                ProblemId:id,
                ProblemBody:body,
                ProblemType:type,
                CorrectAnswer:correct_answer,
                UserAnswer:user_answer,
                CorrectOrNot:correct_or_not, //boolean
                HintOrNot:hint_or_not //boolean
               // TimeSpent:time_spent
            });
        },

        /*quitQuiz: function(id,title,time_spent){
            mixpanel.track("QuitQuiz",{QuizId:id, QuizTitle:title, TimeSpent:time_spent});
        },*/

        finishQuiz: function(id,title,correctRatio){
            mixpanel.track("FinishQuiz",{QuizId:id,QuizTitle:title,CorrectRatio:correctRatio});

        },

        finishLesson: function(lesson_id,lesson_title,/*parent_chapter_id,parent_chapter_title,*/pass_or_not){ //pass_or_not boolean
            mixpanel.track("FinishLesson",{LessonId:lesson_id, LessonTitle:lesson_title, /*ChapterId:parent_chapter_id, ChapterTitle:parent_chapter_title,*/ PassOrNot:pass_or_not});
        }
    }

    var Utils = {
        registerSP: {
            register: function(p_id,p_title,id,title){
                mixpanel.register({

                })
            },
            register_once: function(id,title){

            }
        },

        unregisterSP: function(something){
            mixpanel.unregister(something);
        }
    }

    //var BrowserRelated = {}

    function initMixpanel(id,user_name,name){
        UserRelated.identifyId(id/*,UserRelated.registerSP(id,user_name,name)*/);
    }

    /*function signIn(){
        UserRelated.login(UserRelated.setActive());
    }*/




