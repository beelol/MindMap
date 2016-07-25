class Api::TextBoxesController < ApplicationController
  def index
    @text_boxes = TextBox.all
  end

  def create
    @text_box = TextBox.create!(text_box_params)

    render :show
  end

  def show
    @text_box = TextBox.find(params[:id])
  end

  def update
    @text_box = TextBox.find(params[:id])

    @text_box.update!(text_box_params)

    render :show
  end

  def destroy
    @text_box = TextBox.find(params[:id])

    @text_box.destroy

    render :index
  end

  def text_box_params
    params.require(:text_box).permit(:name, :description, :author_id, :ord, :board_id)
  end
end
