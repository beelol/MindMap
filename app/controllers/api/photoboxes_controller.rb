class Api::PhotoBoxesController < ApplicationController
  def index
    @photo_boxes = PhotoBox.all
  end

  def create
    @photo_box = PhotoBox.create!(photo_box_params)

    render :show
  end

  def show
    @photo_box = PhotoBox.find(params[:id])
  end

  def update
    @photo_box = PhotoBox.find(params[:id])

    @photo_box.update!(photo_box_params)

    render :show
  end

  def destroy
    @photo_box = PhotoBox.find(params[:id])

    @photo_box.destroy

    render :index
  end

  def photo_box_params
    params.require(:photo_box).permit(:name, :description, :photo_url, :author_id, :ord, :board_id)
  end
end
