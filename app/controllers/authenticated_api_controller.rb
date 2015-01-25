class AuthenticatedApiController < ApiController
  before_filter :require_login, :only => [:index, :show]
end
