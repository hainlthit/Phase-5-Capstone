class VillagersController < ApplicationController

    skip_before_action :authorize, only: :index

    def index 
        render json: Villager.all, status: :ok
    end

    def show
        villager = Villager.find(params[:id])
        render json: villager, status: :ok
    end

    def create
        villager = Villager.create!(villager_params)
        render json: villager, status: :created
    end

    def update 
        villager = Villager.find(params[:id])
        villager.update!(villager_params)
        render json: villager, status: :ok
    end 

    def destroy
        villager = Villager.find(params[:id])
        villager.destroy
        render json: {}
    end 

    private

    def villager_params
        params.permit(:name, :species, :birthday, :personality, :image, :likes, :created_by, :id)
    end

end
