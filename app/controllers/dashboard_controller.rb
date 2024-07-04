class DashboardController < ApplicationController
  before_action :authenticate_user!
  def index
    @notes = Note.limit(5)
  
  end
end
