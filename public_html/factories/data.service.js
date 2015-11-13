var app = angular.module("wikiApp")
        .factory('dataService', function (wsService) {

            return {
                createArticle: function (data) {
//                    articles[data.id] = angular.copy(data);
                  
                    wsService.ws.$emit('wiki post', data);

                    //localStorage.setItem("articles",JSON.stringify(articles));
                },
                getArticles: function () {

                    return JSON.parse(localStorage.getItem("articles")) || {};
                }

            }

        });
