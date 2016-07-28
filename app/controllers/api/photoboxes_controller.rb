class Api::PhotoboxesController < ApplicationController
  def index
    @photoboxes = current_user.photo_boxes
  end

  def create
    @photobox = Photobox.create!(photobox_params)

    render :show
  end

  def show
    @photobox = Photobox.find(params[:id])
  end

  def update
    @photobox = Photobox.find(params[:id])

    @photobox.update!(photobox_params)

    render :show
  end

  def destroy
    @photobox = Photobox.find(params[:id])

    @photobox.destroy

    render :index
  end

  def photobox_params
    params.require(:photobox).permit(:name, :description, :photo_url, :author_id, :ord, :board_id)
  end
end
