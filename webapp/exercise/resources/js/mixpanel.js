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

    var LearningRelated = {    // TODO: change data structure ?

        enterChapter: function(id,title){
            mixpanel.track("EnterChapter",{ChapterId:id, ChapterTitle:title});
        },

        enterLesson: function(id,title){
            mixpanel.track("EnterLesson",{LessonId:id, LessonTitle:title});
        },

        enterVideo: function(id,title,length){
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
        }

/*      quitQuiz: function(id,title,time_spent){
            mixpanel.track("QuitQuiz",{QuizId:id, QuizTitle:title, TimeSpent:time_spent});
        },

        finishLesson: function(id,title,pass_or_not){ //pass_or_not boolean
            mixpanel.track("FinishLesson",{LessonId:id, LessonTitle:title, PassOrNot:pass_or_not});
        }*/
    }

    //var BrowserRelated = {}

    function initMixpanel(id,user_name,name){
        UserRelated.identifyId(id/*,UserRelated.registerSP(id,user_name,name)*/);
    }

    /*function signIn(){
        UserRelated.login(UserRelated.setActive());
    }*/




