class Api::TextboxesController < ApplicationController
  def index
    @textboxes = Textbox.all
  end

  def create
    @textbox = Textbox.create!(textbox_params)

    render :show
  end

  def show
    @textbox = Textbox.find(params[:id])
  end

  def update
    @textbox = Textbox.find(params[:id])

    @textbox.update!(textbox_params)

    render :show
  end

  def destroy
    @textbox = Textbox.find(params[:id])

    @textbox.destroy

    render :index
  end

  def textbox_params
    params.require(:textbox).permit(:name, :description, :author_id, :ord, :board_id)
  end
end
