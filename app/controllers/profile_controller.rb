class ProfileController < ApplicationController
  layout "profile_management"

  def index
  	@user = current_user
  end
end
