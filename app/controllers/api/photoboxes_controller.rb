class Api::PhotoBoxesController < ApplicationController
  def index
    @photo_boxes = PhotoBox.all
  end

  def create
    @photo_boxes = PhotoBox.create!(photo_boxes_params)

    render :show
  end

  def show
    @photo_boxes = PhotoBox.find(params[:id])
  end

  def update
    @photo_boxes = PhotoBox.find(params[:id])

    @photo_boxes.update!(photo_boxes_params)

    render :show
  end

  def destroy
    @photo_boxes = PhotoBox.find(params[:id])

    @photo_boxes.destroy

    render :index
  end

  def photo_boxes_params
    params.require(:photo_boxes).permit(:name, :description, :photo_url, :author_id, :ord, :board_id)
  end
end
