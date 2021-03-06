class SoundsController < ApplicationController

  before_action :set_sound, only: [:show, :edit, :update, :destroy]

  def index
    @sounds = Sound.all
  end

  def new
    @sound = Sound.new
  end

  def create
    @sound = current_user.sounds.new(sound_params)

    if @sound.save
      redirect_to sounds_url
    else
      render :new
    end
  end


  private
  def sound_params
    params.require(:sound).permit(:name, :sound)
  end

  def set_sound
    @sound = Sound.find(params[:id])
  end
end
