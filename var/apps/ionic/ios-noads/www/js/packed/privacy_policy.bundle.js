/*global
 App, angular, BASE_PATH
 */

angular.module("starter").controller("PrivacyPolicyController", function($scope, $stateParams, Application) {

    angular.extend($scope, {
        value_id            : $stateParams.value_id,
        page_title          : Application.privacy_policy_title,
        privacy_policy      : Application.privacy_policy,
        card_design         : false
    });

});