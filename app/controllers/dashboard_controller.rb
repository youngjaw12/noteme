class DashboardController < ApplicationController
  before_action :authenticate_user!
  def index
    @notes = Note.limit(5)
    @notes = Note.order ("created_at DESC")
  
  end
end
