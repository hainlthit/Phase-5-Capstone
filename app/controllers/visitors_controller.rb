class VisitorsController < ApplicationController

    def index 
        render json: Visitor.all, status: :ok
    end

    def show
        visitor = Visitor.find(params[:id])
        render json: visitor, status: :ok
    end

    def create
        visitor = Visitor.create!(visitor_params)
        render json: visitor, status: :created
    end

    def update 
        visitor = Visitor.find(params[:id])
        visitor.update!(visitor_params)
        render json: villager, status: :ok
    end 

    def destroy
        visitor = Visitor.find(params[:id])
        visitor.destroy
        render json: {}
    end 

    private

    def visitor_params
        params.permit(:island_id, :villager_id)
    end

end
