class StickyNotesController < ApplicationController
  before_action :authenticate_user
  before_action :set_sticky_note, only: [:show, :update, :destroy]

  # GET /sticky_notes
  def index
    @sticky_notes = StickyNote.all
    render json: @sticky_notes
  end

  # GET /sticky_notes/1
  def show
    render json: @sticky_note
  end

  # POST /sticky_notes
  def create
    @sticky_note = StickyNote.new(sticky_note_params)

    if @sticky_note.save
      render json: @sticky_note, status: :created, location: @sticky_note
    else
      render json: @sticky_note.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /sticky_notes/1
  def update
    if @sticky_note.update(sticky_note_params)
      render json: @sticky_note
    else
      render json: @sticky_note.errors, status: :unprocessable_entity
    end
  end

  # DELETE /sticky_notes/1
  def destroy
    @sticky_note.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_sticky_note
      @sticky_note = StickyNote.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def sticky_note_params
      params.require(:sticky_note).permit(:jobListing_url, :company, :title, :location, :app_status, :notes, :user_id)
    end
end
