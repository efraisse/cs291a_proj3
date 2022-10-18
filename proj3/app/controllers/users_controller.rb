class UsersController < ApplicationController
    def index
        users = User.all

        render json: UserSerializer.new(users).serialized_json
    end

    def show #params[:id] should have the id value passed in
        user = User.find_by(iduser: params[:id])

        if user
            render json: UserSerializer.new(user, options).serialized_json
        else
            raise ActionController::RoutingError.new('Not Found'), status: 404
        end
    end

    def create
        user = User.new(user_params)

        user.id = user.iduser

        if user.save
            render json: UserSerializer.new(user).serialized_json
        else
            raise ActionController::RoutingError.new('Not Found'), status: 404
        end
    end

    def edit
        user = User.find_by(iduser: params[:id])

        if user
            render json: UserSerializer.new(user, options).serialized_json
        else
            raise ActionController::RoutingError.new('Not Found'), status: 404
        end
    end

    def update
        user = User.find_by(iduser: params[:id])

        if user.update(user_params)
            render json: UserSerializer.new(user, options).serialized_json
        else
            raise ActionController::RoutingError.new('Not Found'), status: 404
        end
    end

    def destroy #when destroying a user, need to destroy all comments and posts with that user
        user = User.find_by(iduser: params[:id])

        if user.destroy
            head :no_content
        else
            raise ActionController::RoutingError.new('Not Found'), status: 404
        end
    end

    private

    def user_params
        params.require(:user).permit(:iduser, :nickname)
    end

    def options
        @options ||= {include: %i[posts]}
    end
end
