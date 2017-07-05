class WelcomeController < ApplicationController
  def index
    @sounds = Sound.order(created_at: :desc).limit(10)
  end
end
